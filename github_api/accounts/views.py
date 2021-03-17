from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework_simplejwt.authentication import JWTAuthentication
from .utils import TokenBlackList,GenerateToken
from .serializer import RegisterSerializer
from django.contrib.auth.models import User
from rest_framework_simplejwt.views import TokenObtainPairView


class LoginView(TokenObtainPairView):

    authentication_classes = [JWTAuthentication]

    def post(self,request):
        data = super().post(request).data
        # print(data.data)
        data = {
            "access_token":data["access"],
            "refersh_token":data["refresh"]
        }
        user = User.objects.filter(username=request.data.get("username")).first()
        serializer = RegisterSerializer(user)
        data.update(serializer.data)
        return Response(data=data,status=status.HTTP_200_OK)

class LogoutView(APIView):
    authentication_classes = [JWTAuthentication]

    def post(self,request):
        refresh = request.data.get("refresh")
        try:
            TokenBlackList(refresh)
            return Response({"message":"Logout Successfully"},status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error":f"{e}"},status=status.HTTP_401_UNAUTHORIZED)

class RegisterView(APIView):

    authentication_classes = [JWTAuthentication]

    def post(self,request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.filter(username=serializer.data.get("username")).first()
            data = GenerateToken(user)
            data.update(serializer.data)
            return Response(data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class CheckAuth(APIView):
    authentication_classes = [JWTAuthentication]

    def get(self,request):
        if request.user.is_authenticated:
            return Response("hii")
        return Response("error")