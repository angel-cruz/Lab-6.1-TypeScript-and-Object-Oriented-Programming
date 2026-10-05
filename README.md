# Lab-6.1-TypeScript-and-Object-Oriented-Programming
Object-oriented inventory tracker using TypeScript

# Reflection Questions

## 1. How does TypeScript enforce type safety in this object-oriented program?

TypeScript enforces type safety by requiring properties and variables to have specific types. For example, `sku` and `name` are strings, while `price` is a number. This helps catch errors before the program runs.

## 2. How did inheritance reduce code duplication for `PhysicalProduct` and `DigitalProduct`?

Inheritance allows `PhysicalProduct` and `DigitalProduct` to extend the `Product` class. They automatically receive common properties like `sku`, `name`, and `price`, so I do not have to rewrite the same code in each class.

## 3. What are the benefits of using encapsulation and access modifiers (`public`, `private`, `protected`) in this context?

Access modifiers help control how properties and methods can be accessed. `public` allows access from anywhere, `private` keeps data inside the class, and `protected` allows the class and its subclasses to access the data. This helps keep the code organized and protects data from being changed incorrectly.

## 4. If you had to add a new type of product, such as a `SubscriptionProduct`, how would polymorphism make this extension straightforward?

I could create a `SubscriptionProduct` class that extends `Product` and override methods like `getPriceWithTax()`. Since it is still a type of `Product`, I could add it to the same product array and process it using the same loop without changing much of the existing code.
