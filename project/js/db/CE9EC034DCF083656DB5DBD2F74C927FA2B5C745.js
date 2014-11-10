this.NesDb = this.NesDb || {};

NesDb[ 'CE9EC034DCF083656DB5DBD2F74C927FA2B5C745' ] = {
	"$": {
		"name": "Plasma Ball",
		"altname": "プラズマボール",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "JF-36",
		"publisher": "Jaleco",
		"developer": "",
		"region": "Japan",
		"players": "2",
		"date": "1992-03-27"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "0DB4B382",
				"sha1": "CE9EC034DCF083656DB5DBD2F74C927FA2B5C745",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-12-06"
			},
			"board": [
				{
					"$": {
						"type": "JALECO-JF-24",
						"pcb": "JF-24A",
						"mapper": "18"
					},
					"prg": [
						{
							"$": {
								"size": "128k",
								"crc": "6EC74E4C",
								"sha1": "ACACA899D1318333A5BF717E8439E3290D514C24"
							}
						}
					],
					"chr": [
						{
							"$": {
								"size": "128k",
								"crc": "18B13F34",
								"sha1": "A1DEE892BD4472E97338E92FC4809836A49DECDA"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx32"
							}
						},
						{
							"$": {
								"type": "SS88006"
							}
						}
					]
				}
			]
		}
	]
};
