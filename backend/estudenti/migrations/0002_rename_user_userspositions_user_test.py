# Generated by Django 4.2.1 on 2023-05-20 20:00

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("estudenti", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="userspositions",
            old_name="user",
            new_name="user_test",
        ),
    ]