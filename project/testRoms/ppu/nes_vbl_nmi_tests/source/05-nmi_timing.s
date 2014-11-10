; Tests NMI timing.
;
; Prints which instruction NMI occurred
; after. Test is run one PPU clock later
; each line.
;
; Correct output:
; 01 4
; 02 4
; 03 3
; 04 3
; 05 3
; 06 3
; 07 3
; 08 3
; 09 2

CUSTOM_NMI=1
.include "shell.inc"
.include "sync_vbl.s"

zp_byte nmi_data

nmi:    stx nmi_data
	rti

main:   for_loop test,1,9,+1
	check_crc $D8ED4C77
	jmp tests_passed

test:   jsr print_a
	jsr sync_vbl_delay
	delay 29740+29781
	lda #$FF
	sta nmi_data
	ldx #0
	lda #PPUCTRL_NMI
	sta PPUCTRL
landing:
	; NMI occurs after one of these
	; instructions and prints X
	ldx #1
	ldx #2
	ldx #3
	ldx #4
	
	lda #0
	sta PPUCTRL
	lda nmi_data
	jsr print_dec
	jsr print_newline
	rts
