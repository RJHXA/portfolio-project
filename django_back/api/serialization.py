from rest_framework import serializers
from api.models import Projects

class Serializationclass(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = '__all__'