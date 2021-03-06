# Generated by Django 2.2 on 2020-08-24 04:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contestant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('vote_count', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token', models.CharField(max_length=200)),
                ('ammount', models.IntegerField()),
                ('confirmed', models.BooleanField(default=False)),
                ('contestant', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='payments', to='backend.Contestant')),
            ],
        ),
    ]
