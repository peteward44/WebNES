; Synchronizes EXACTLY to VBL, to accuracy of 1/3 CPU clock
; (1/2 CPU clock if PPU is enabled). Reading PPUSTATUS
; 29772 clocks or later after return will have bit 7 set.
; Preserved: X, Y
; Time: 120-330 msec
.align 64
sync_vbl:
	; Disable interrupts
	sei
	lda #0
	sta PPUCTRL
	
	; Coarse synchronize
	bit PPUSTATUS
:       bit PPUSTATUS
	bpl :-
	
	; Delay so that VBL is sure to occur slightly after
	; critical window in loop below.
	delay 29760     ; +1 works, +2 fails
	jmp @first
	
	; VBL occurs every 29780+2/3 (rendering disabled)
	; or 29780.5 (rendering enabled) CPU clocks. Loop
	; takes 29781 CPU clocks. Thus, time of VBL will
	; be effectively 1/3 or 1/2 CPU clock earlier in
	; loop each time. At some point, it will fall just
	; before second PPUSTATUS read below.
:       delay 29781-4-4-3
@first: bit PPUSTATUS   ; clear flag
	bit PPUSTATUS   ; see if just set
	bpl :-
	
	rts

; Synchronizes exactly to VBL, then delays
; A PPU clocks. Disables PPU rendering.
; Preserved: X, Y
.align 32
sync_vbl_delay:
	pha
	lda #0
	sta PPUMASK
	jsr sync_vbl
	
	; VBL occurs every 29780.67 clocks, therefore
	; each iteration of the loop is like delaying
	; 1/3 CPU clock (1 PPU clock).
:       pla             ; 29781 clocks per iter
	beq :+
	clc
	adc #-1
	pha
	delay 29781-16
	jmp :-
:       rts
