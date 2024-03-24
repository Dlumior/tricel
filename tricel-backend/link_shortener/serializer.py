from rest_framework import serializers
from .models import Link


class LinkShortenerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = ("id", "name", "url", "short_url", "lifetime", "visibility")
