from django.shortcuts import render
from rest_framework import viewsets
from .serializer import LinkShortenerSerializer
from .models import Link


class LinkShortenerView(viewsets.ModelViewSet):
    serializer_class = LinkShortenerSerializer
    queryset = Link.objects.all()
