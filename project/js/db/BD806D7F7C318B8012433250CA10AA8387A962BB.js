this.NesDb = this.NesDb || {};

NesDb[ 'BD806D7F7C318B8012433250CA10AA8387A962BB' ] = {
	"$": {
		"name": "Magician",
		"class": "Licensed",
		"catalog": "NES-XD-USA",
		"publisher": "Taxan",
		"developer": "Eurocom",
		"region": "USA",
		"players": "1",
		"date": "1991-02"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "91E2E863",
				"sha1": "BD806D7F7C318B8012433250CA10AA8387A962BB",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2007-01-14"
			},
			"board": [
				{
					"$": {
						"type": "NES-TKROM",
						"pcb": "NES-TKROM-01",
						"mapper": "4"
					},
					"prg": [
						{
							"$": {
								"name": "NES-XD-0 PRG",
								"size": "128k",
								"crc": "7A4D4EAF",
								"sha1": "B5BD2044B743E41185973DBD8E1C3297DBED98AC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "NES-XD-0 CHR",
								"size": "128k",
								"crc": "8AA188C2",
								"sha1": "855962CF85E1E3C2D28FD9A225EB766AB4D394A5"
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
								"type": "MMC3B"
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
