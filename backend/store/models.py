from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models
from django.utils.translation import gettext_lazy as _

class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('customer', 'Customer'),
    )
    
    role = models.CharField(max_length=50, choices=ROLE_CHOICES, default='customer')
    profile_picture = models.ImageField(upload_to='user_profile_pictures', null=True, blank=True)
    phone_number = models.CharField(max_length=20, unique=True)
    is_subscribed = models.BooleanField(default=False)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)

    groups = models.ManyToManyField(
        Group,
        verbose_name=_('groups'),
        blank=True,
        help_text=_('The groups this user belongs to.'),
        related_name='store_user_set',  # Add related_name argument
        related_query_name='user'
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_('user permissions'),
        blank=True,
        help_text=_('Specific permissions for this user.'),
        related_name='store_user_set',  # Add related_name argument
        related_query_name='user'
    )

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    size = models.CharField(max_length=20)
    tlet = models.CharField(max_length=50)
    availability = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='product_images')

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)
    order_date = models.DateTimeField(auto_now_add=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    payment_status = models.BooleanField(default=False)
    quantity = models.PositiveIntegerField(default=1)
    height_shoulder_to_foot = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    height_shoulder_to_waist = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    height_waist_to_foot = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    chest = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    waist = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    hips = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    shoulder = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    sleeve_hand_bended = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    amount_paid = models.DecimalField(max_digits=8, decimal_places=2, default=0)


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()

class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    review_text = models.TextField()
    rating = models.IntegerField()
    date = models.DateTimeField(auto_now_add=True)

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()