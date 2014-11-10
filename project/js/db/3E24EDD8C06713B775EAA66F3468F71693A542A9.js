this.NesDb = this.NesDb || {};

NesDb[ '3E24EDD8C06713B775EAA66F3468F71693A542A9' ] = {
	"$": {
		"name": "Videomation",
		"class": "Licensed",
		"catalog": "NES-V8-USA",
		"publisher": "THQ",
		"developer": "Western Technologies",
		"region": "USA",
		"players": "1",
		"date": "1991-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "5E66EAEA",
				"sha1": "3E24EDD8C06713B775EAA66F3468F71693A542A9",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2005-10-01"
			},
			"board": [
				{
					"$": {
						"type": "NES-CPROM",
						"pcb": "NES-CPROM-02",
						"mapper": "13"
					},
					"prg": [
						{
							"$": {
								"name": "NES-V8-0 PRG",
								"size": "32k",
								"crc": "5E66EAEA",
								"sha1": "3E24EDD8C06713B775EAA66F3468F71693A542A9"
							}
						}
					],
					"vram": [
						{
							"$": {
								"id": "0",
								"size": "8k"
							}
						},
						{
							"$": {
								"id": "1",
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx04"
							}
						},
						{
							"$": {
								"type": "74xx08"
							}
						},
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					],
					"pad": [
						{
							"$": {
								"h": "1",
								"v": "0"
							}
						}
					]
				}
			]
		}
	]
};
