#
# makefile for nes/demos/fifth
#

AS = ca65
LD = ld65
RM = rm
ASFLAGS =
LDFLAGS =

TARGET = FCoftest overtest.nes

OBJS = overtest.o65

default: $(TARGET)

clean:
	$(RM) *~ *.o65

FCoftest: $(OBJS) pcjr.l65
	$(LD) $(LDFLAGS) -C pcjr.l65 -o $@ $(OBJS)

overtest.nes: $(OBJS) ines.l65
	$(LD) $(LDFLAGS) -C ines.l65 -o $@ $(OBJS)

.SUFFIXES: .a65 .o65

.a65.o65:
	$(AS) $(ASFLAGS) -o $@ $<

# EOF
