from rest_framework import serializers
from django.contrib.auth.models import User

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = []

    def create(self,validated_data):
        instance = User.objects.create_user(
            **validated_data
        )
        return instance