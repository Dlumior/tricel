# Generated by Django 5.0.3 on 2024-03-15 21:38

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('link_shortener', '0002_alter_link_visibility'),
    ]

    operations = [
        migrations.AddField(
            model_name='link',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
