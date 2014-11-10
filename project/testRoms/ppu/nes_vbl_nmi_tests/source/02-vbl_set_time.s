; Tests time VBL flag is set.
;
; Reads PPUSTATUS twice and prints VBL flags from
; them. Test is run one PPU clock later each line.
;
; Correct output:
; 01 -V
; 02 -V
; 03 -V
; 04 --
; 05 V-
; 06 V-
; 07 V-
; 08 V-
; 09 V-

; After some power ups, 03 and 04 are --

.include "shell.inc"
.include "sync_vbl.s"
	
main:   for_loop test,1,9,+1
	check_crc $ACFB0A1C
	jmp tests_passed        
	
test:   jsr print_a
	jsr sync_vbl_delay
	delay 29754
	ldx PPUSTATUS
	ldy PPUSTATUS
	txa
	print_cc bmi,'V','-'
	tya
	print_cc bmi,'V','-'
	jsr print_newline
	rts
