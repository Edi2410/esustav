# Generated by Django 4.1 on 2023-06-01 17:09

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("eizbori", "0005_candidate_prezentacije"),
    ]

    operations = [
        migrations.RenameField(
            model_name="candidate",
            old_name="prezentacije",
            new_name="predstavljanje",
        ),
    ]
