# Generated by Django 4.1 on 2023-05-25 17:24

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("estudenti", "0002_remove_user_role_alter_userspositions_virtual_team"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="photo",
            field=models.TextField(blank=True, null=True),
        ),
    ]
