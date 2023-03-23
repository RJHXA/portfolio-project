from api.serialization import Serializationclass
from api.models import Projects

from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination

# Create your views here.

class ProjectsAPI(APIView, PageNumberPagination):
    page_size = 3

    def get(self, request):
        projects = Projects.objects.all()
        results = self.paginate_queryset(projects, request, view=self)
        serializer_class = Serializationclass(results, many=True)
        data = {'projects': serializer_class.data}
        return Response(data)