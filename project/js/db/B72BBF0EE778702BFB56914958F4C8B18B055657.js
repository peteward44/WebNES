this.NesDb = this.NesDb || {};

NesDb[ 'B72BBF0EE778702BFB56914958F4C8B18B055657' ] = {
	"$": {
		"name": "Al Unser Jr. Turbo Racing",
		"class": "Licensed",
		"catalog": "NES-FH-USA",
		"publisher": "Data East",
		"developer": "Sakata SAS",
		"region": "USA",
		"players": "4",
		"date": "1990-03"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "5BC9D7A1",
				"sha1": "B72BBF0EE778702BFB56914958F4C8B18B055657",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-01-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-SKROM",
						"pcb": "NES-SKROM-04",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-FH-0 PRG",
								"size": "128k",
								"crc": "E41AE491",
								"sha1": "CE61D47956A36669C5642726F890A944D513FD8F"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-FH-0 CHR",
								"size": "128k",
								"crc": "5F937051",
								"sha1": "C7246983AA56364465089ACD502E34741F741F18"
							}
						}
					],
					"wram": [
						{
							"$": {
								"size": "8k",
								"battery": "1"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "MMC1B2"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "6113B1"
							}
						}
					]
				}
			]
		}
	]
};
