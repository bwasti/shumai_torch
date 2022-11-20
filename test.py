import torch
import time

size = 4
iters = 10000

sum_ = 0
for i in range(1000):
    c = torch.eye(size)
    c = torch.matmul(c, c)
    sum_ += c.sum().item()

t0 = time.time()
for i in range(iters):
    c = torch.eye(size)
    c = torch.matmul(c, c)
    sum_ += c.sum().item()
t1 = time.time()
print(f"{iters / (t1-t0)} iters/sec (result: {sum_})")
