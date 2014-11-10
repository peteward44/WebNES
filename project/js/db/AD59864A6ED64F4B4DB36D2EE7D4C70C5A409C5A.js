this.NesDb = this.NesDb || {};

NesDb[ 'AD59864A6ED64F4B4DB36D2EE7D4C70C5A409C5A' ] = {
	"$": {
		"name": "Ferrari Grand Prix Challenge",
		"class": "Licensed",
		"catalog": "NES-FG-USA",
		"publisher": "Acclaim",
		"developer": "System 3",
		"region": "USA",
		"players": "1",
		"date": "1992-06"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "CE77B4BE",
				"sha1": "AD59864A6ED64F4B4DB36D2EE7D4C70C5A409C5A",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-03-25"
			},
			"board": [
				{
					"$": {
						"type": "NES-SLROM",
						"pcb": "NES-SLROM-06",
						"mapper": "1"
					},
					"prg": [
						{
							"$": {
								"name": "NES-FG-0 PRG",
								"size": "128k",
								"crc": "B051C0E1",
								"sha1": "138B18E967A7877428F88D5CEA343B70D238B2C9"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-FG-0 CHR",
								"size": "128k",
								"crc": "13D6708E",
								"sha1": "4CE95BEBC9755F5B841898DC29C740495B7C6706"
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
