from rest_framework_simplejwt.tokens import RefreshToken



def TokenBlackList(token):
    token = RefreshToken(token)
    token.blacklist()

def GenerateToken(user):
    token = RefreshToken.for_user(user)
    data = {
        "access_token":str(token.access_token),
        "refresh_token":str(token)
    }
    return data