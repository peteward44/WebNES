; Tests behavior when PPUSTATUS is read near time
; VBL flag is set.
;
; Reads PPUSTATUS one PPU clock later on each line.
; Prints whether NMI occurred, and VBL flag read
; from PPUSTATUS.
;
; Correct output:
; 01 N-
; 02 N-
; 03 N-
; 04 --
; 05 -V
; 06 -V
; 07 NV
; 08 NV
; 09 NV

CUSTOM_NMI=1
.include "shell.inc"
.include "sync_vbl.s"
	
zp_byte nmi_count

nmi:    inc nmi_count
	rti

main:   for_loop test,1,9,+1
	check_crc $D481B9AF
	jmp tests_passed        
	
test:   jsr print_a
	jsr sync_vbl_delay
	delay 29739
	
	lda #0
	sta <nmi_count
	lda #PPUCTRL_NMI
	sta PPUCTRL
	
	nop
	nop
	lda PPUSTATUS
	nop
	nop
	
	ldx #0
	stx PPUCTRL
	
	ldx nmi_count
	print_cc bne,'N','-'
	
	and #$80
	print_cc bne,'V','-'
	
	jsr print_newline
	rts

