; Tests timing of skipped clock every other frame
; when BG is enabled.
;
; Writes $08 then $00 to $2001 around when clock is
; skipped. Does this on one frame, delays 3 frames,
; then again with the same timing. Then prints how
; many clocks were skipped. Test is run one PPU
; clock later each line.
;
; Correct output:
; 00 0
; 01 0
; 02 1
; 03 1
; 
; 0C 1
; 0D 1
; 0E 0
; 0F 0

.include "shell.inc"
.include "sync_vbl.s"

.align 256
test2:
test:   jsr print_a
	tax
	jsr sync_vbl_delay
	delay 2352
	
	; Enable BG momentarily on even and
	; odd frames, at same PPU clocks (so
	; we must delay 3 frames between)
	lda #8
	ldy #0
	sta $2001
	sty $2001
	delay 29781*3-1-12
	lda #8
	ldy #0
	sta $2001
	sty $2001
	
	; Find number of PPU clocks skipped
	delay 29781-2389
:       delay 29781-2-4-3
	inx
	bit PPUSTATUS
	bpl :-
	
	txa
	eor #$FF
	clc
	adc #$15
	jsr print_dec
	jsr print_newline
	rts

main:   for_loop test,0,3,+1
	jsr print_newline
	for_loop test,12,15,+1
	check_crc $7159048D
	jmp tests_passed

