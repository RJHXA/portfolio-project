from django.db import models

# Create your models here.

class Projects(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length= 50, null= False, blank= False)
    description = models.CharField(max_length= 200, null= False, blank= False)
    url = models.CharField(max_length= 100, null= False, blank= False)

    class Meta:
        db_table = 'projects'