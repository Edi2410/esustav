# Generated by Django 4.2.1 on 2023-05-20 20:02

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("eizbori", "0003_rename_user_kandidature_candidate_user_and_more"),
    ]

    operations = [
        migrations.RenameField(
            model_name="kandidature",
            old_name="candidate_user",
            new_name="user",
        ),
        migrations.RenameField(
            model_name="votes",
            old_name="votes_from",
            new_name="user",
        ),
    ]
