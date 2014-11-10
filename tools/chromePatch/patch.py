import mmap
import ctypes

GUI = 2
CUI = 3

# Take chrome.exe from the current directory
with open("chrome.exe", "r+b") as f:
   map = mmap.mmap(f.fileno(), 1024, None, mmap.ACCESS_WRITE)
   # DWORD field of IMAGE_DOS_HEADER
   e_lfanew = (ctypes.c_ulong.from_buffer(map, 30 * 2).value)
   # Signature (4 bytes), IMAGE_FILE_HEADER (20 bytes), offset to Subsystem field in IMAGE_OPTIONAL_HEADER
   subsystem = ctypes.c_ushort.from_buffer(map, e_lfanew + 4 + 20 + (17 * 4))
   if subsystem.value == GUI:
       subsystem.value = CUI
       print "patched: gui -> cui"
   elif subsystem.value == CUI:
       subsystem.value = GUI
       print "patched: cui -> gui"
   else:
       print "unknown subsystem: %x" % (subsystem.value)