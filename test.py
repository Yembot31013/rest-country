import socket
import threading

def receiveData():
  while True:
    if soc.recv(1024).decode():
      print(soc.recv(1024).decode())
  
soc = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

value = soc.connect_ex(("192.168.241.188", 445))

if value > 0:
  soc.send("ls".encode())
  
  th = threading.Thread(target=receiveData)
  th.start()

