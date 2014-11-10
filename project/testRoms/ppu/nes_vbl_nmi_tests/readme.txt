NES NTSC PPU Tests

These verify behavior and timing of the NTSC PPU's VBL flag, NMI enable,
and NMI interrupt. Timing is tested to an accuracy of one PPU clock.
Sometimes the NES starts up with a different value in the clock divider,
causing PPU timing to be slightly different and fail some of the tests.

Some tests might turn the screen off and on, since that affects the
behavior being tested. This does not indicate failure, and should be
ignored. Only the test result reported at the end is important.

The error code at the end is also reported audibly with a series of
tones, in case the picture isn't visible for some reason. The code is in
binary, with a low tone indicating 0 and a high tone 1. The first tone
is always a zero, so you can tell the difference. A code of 0 means
passed, 1 means failure, and 2 or higher indicates a specific reason as
listed in the source code by the corresponding set_code line. Examples:

low           = 0 = passed
low high      = 1 = failed
low high low  = 2 = error 2
low high high = 3 = error 3

See the source code for more information about a particular test and why
it might be failing. Each test has comments and correct output at top.
-- 
Shay Green <gblargg@gmail.com>
