import os

# Create a sample file first
with open("sample.txt", "w") as f:
    f.write("This is a sample text file.\nIt has multiple lines.\nEnd of file.")

# 1. Read text file
with open("sample.txt", "r") as f:
    print(f.read())
# Output:
# This is a sample text file.
# It has multiple lines.
# End of file.

# 2. Write text to .txt file (like InputStream in Java)
with open("output.txt", "w") as f:
    f.write("Hello, this is written to output.txt\n")
# Output: (file created and written)

# 3. Read a file stream
with open("output.txt", "r") as f:
    for line in f:
        print(line.strip())
# Output:
# Hello, this is written to output.txt

# 4. Read a file stream with random access
with open("output.txt", "rb") as f:
    f.seek(7)  
    print(f.read(10))
# Output:
# b'this is wr'

# 5. Read a file at a particular index using seek()
with open("output.txt", "r") as f:
    f.seek(6)
    print(f.read(4))
# Output:
# this

# 6. Check read and write access permissions
filename = "output.txt"
print("Readable:", os.access(filename, os.R_OK))
print("Writable:", os.access(filename, os.W_OK))
# Output:
# Readable: True
# Writable: True
