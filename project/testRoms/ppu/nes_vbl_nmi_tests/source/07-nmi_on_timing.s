; Tests NMI occurrence when enabled near time
; VBL flag is cleared.
;
; Enables NMI one PPU clock later on each line.
; Prints whether NMI occurred.
;
; Correct output:
; 01 N
; 02 N
; 03 N
; 04 N
; 05 -
; 06 -
; 07 -
; 08 -
; 09 -

CUSTOM_NMI=1
.include "shell.inc"
.include "sync_vbl.s"
	
zp_byte nmi_count

nmi:    inc nmi_count
	rti

main:   for_loop test,1,9,+1
	check_crc $30CB2DF5
	jmp tests_passed        
	
test:   jsr print_a
	jsr sync_vbl_delay
	delay 29733+2287
	
	lda #0
	sta <nmi_count
	lda #PPUCTRL_NMI
	sta PPUCTRL
	nop
	nop
	lda #0
	sta PPUCTRL
	
	lda nmi_count
	print_cc bne,'N','-'
	jsr print_newline
	rts

