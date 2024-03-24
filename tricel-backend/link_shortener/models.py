from django.db import models


class LinkVisibilityChoices(models.TextChoices):
    PRIVATE = "Private"
    PUBLIC = "Public"


class Link(models.Model):
    name = models.CharField(max_length=90)
    url = models.URLField()
    short_url = models.URLField()
    lifetime = models.DateTimeField()
    visibility = models.CharField(
        max_length=15,
        choices=LinkVisibilityChoices.choices,
        default=LinkVisibilityChoices.PUBLIC,
    )
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created", "id"]

    def __str__(self) -> str:
        return self.name
