# Generated by Django 3.0.1 on 2020-01-28 17:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('invoices', '0009_auto_20200126_2248'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contractoraddress',
            name='contractor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='invoices.Contractor'),
        ),
    ]
