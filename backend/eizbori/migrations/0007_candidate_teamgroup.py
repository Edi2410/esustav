# Generated by Django 4.1 on 2023-06-24 11:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("estudenti", "0003_user_photo"),
        ("eizbori", "0006_rename_prezentacije_candidate_predstavljanje"),
    ]

    operations = [
        migrations.AddField(
            model_name="candidate",
            name="teamgroup",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.DO_NOTHING,
                to="estudenti.teamgroups",
            ),
        ),
    ]
