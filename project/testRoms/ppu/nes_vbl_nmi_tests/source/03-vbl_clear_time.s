; Tests time VBL flag is cleared.
;
; Reads PPUSTATUS and prints VBL flag.
; Test is run one PPU clock later each line.
;
; Correct output:
; 01 V
; 02 V
; 03 V
; 04 V
; 05 V
; 06 -
; 07 -
; 08 -
; 09 -

.include "shell.inc"
.include "sync_vbl.s"
	
main:   for_loop test,1,9,+1
	check_crc $C2A6A5EF
	jmp tests_passed        
	
test:   jsr print_a
	jsr sync_vbl_delay
	delay 29754
	delay 2273
	lda PPUSTATUS
	print_cc bmi,'V','-'
	jsr print_newline
	rts
