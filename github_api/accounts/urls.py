from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns 
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView
from .views import LogoutView,CheckAuth,RegisterView,LoginView

urlpatterns = format_suffix_patterns([
    path('login/', LoginView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("logout/",LogoutView.as_view(),name="logout"),
    path("register/",RegisterView.as_view(),name="register"),
    path("auth-check/",CheckAuth.as_view())
])