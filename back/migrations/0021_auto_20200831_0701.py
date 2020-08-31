# Generated by Django 3.1 on 2020-08-31 04:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0020_auto_20200827_0705'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='chemical_handling',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='project',
            name='cold_work',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='project',
            name='confined_space',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='project',
            name='hot_work',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='project',
            name='lifting_work',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='project',
            name='work_alone',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='project',
            name='work_at_height',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='project',
            name='work_at_sensitive_area',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='clientmanager',
            name='position',
            field=models.CharField(choices=[('SafeMan', 'Safety Manager'), ('SecMan', 'Security Manager'), ('SecOff', 'Security Officer'), ('SiteOwn', 'Site Owner'), ('WorkOwn', 'Owner of Work'), ('SecGrd', 'Security Guards')], default='SiteOwn', max_length=10),
        ),
    ]
