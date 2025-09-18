# Rayleigh-Ritz solution for Q10 (E=100, A=1, L=1)
import numpy as np
import matplotlib.pyplot as plt

# Given
E = 100.0
A = 1.0
L = 1.0

# Ritz coefficients found analytically:
a0 = 0.0
a1 = 7.0/1200.0
a2 = -1.0/400.0

def u(x): 
    return a1*x + a2*x**2

def eps(x):
    return a1 + 2.0*a2*x

def sigma(x):
    return E * eps(x)

# tip displacement
u_tip = u(1.0)

# Print results
print("a1 =", a1)
print("a2 =", a2)
print("u(x) = a1*x + a2*x^2")
print("u(1) =", u_tip)

# Plot sigma vs x
xs = np.linspace(0, L, 201)
sig_xs = sigma(xs)

plt.figure(figsize=(6,4))
plt.plot(xs, sig_xs)
plt.xlabel('x (length unit)')
plt.ylabel('sigma(x) (same units as E)')
plt.title('Stress sigma(x) vs x (Q10 Rayleigh-Ritz)')
plt.grid(True)
plt.show()
