# Generated by Django 4.1 on 2023-06-01 16:57

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("eizbori", "0004_candidate_aktivnosti_candidate_deleted"),
    ]

    operations = [
        migrations.AddField(
            model_name="candidate",
            name="prezentacije",
            field=models.TextField(blank=True, null=True),
        ),
    ]
