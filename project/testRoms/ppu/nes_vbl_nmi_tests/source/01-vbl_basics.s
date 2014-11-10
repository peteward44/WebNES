; Tests basic VBL operation and VBL period.

.include "shell.inc"

delay_297803:
	ldx #236        ; 297791 delay
	ldy #232
:       dex
	bne :-
	dey
	bne :-
	rts

delay_30111:
	ldx #112        ; 30099 delay
	ldy #24
:       dex
	bne :-
	dey
	bne :-
	rts

wait_vbl2:
	lda $2002
:       lda $2002
	bpl :-
	rts

main:   set_test 2,"VBL period is way off"
	jsr wait_vbl2
	jsr delay_30111
	lda $2002
	jpl test_failed
	
	set_test 3,"Reading VBL flag should clear it"
	lda $2002
	jmi test_failed
	
	set_test 4,"Writing $2002 shouldn't affect VBL flag"
	jsr wait_vbl2
	jsr delay_30111
	sta $2002
	lda $2002
	jpl test_failed
	
	set_test 5,"$2002 should be mirrored at $200A"
	jsr wait_vbl2
	jsr delay_30111
	lda $200A
	jpl test_failed
	lda $200A
	jmi test_failed
	
	set_test 6,"$2002 should be mirrored every 8 bytes up to $2FFA"
	jsr wait_vbl2
	jsr delay_30111
	lda $2FFA
	jpl test_failed
	lda $2FFA
	jmi test_failed
	
	delay_msec 1000
	
	lda #0          ; BG off
	sta $2001
	
	; Delay 60 frames after VBL, then read VBL flag
	jsr wait_vbl2
	jsr delay_297803
	jsr delay_297803
	jsr delay_297803
	jsr delay_297803
	jsr delay_297803
	jsr delay_297803
	nop
	ldx $2002
	lda <0          ; 5 delay
	nop
	lda $2002
	
	set_test 6,"VBL period is too short with BG off"
	cpx #0
	jmi test_failed
	
	set_test 7,"VBL period is too long with BG off"
	cmp #0
	jpl test_failed
	
	
	jmp tests_passed
