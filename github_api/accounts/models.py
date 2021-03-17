from django.db import models


# Create your models here.
class Category(models.Model):
    parent = models.ForeignKey("self",null=True,blank=True,on_delete=models.CASCADE)
    name = models.CharField(max_length=50,unique=True)



# def signal(sender,instance,*args,**kwargs):
#     if instance.parent.name == instance.name:
#         instance.parent = None 
    