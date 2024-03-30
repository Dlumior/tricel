from django.shortcuts import render
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from link_shortener.utils.paginator import StandardResultsSetPagination
from link_shortener.serializer import LinkShortenerSerializer
from link_shortener.models import Link


class LinkShortenerView(viewsets.ModelViewSet):
    queryset = Link.objects.all()
    serializer_class = LinkShortenerSerializer

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["visibility"]
    pagination_class = StandardResultsSetPagination
