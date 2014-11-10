this.NesDb = this.NesDb || {};

NesDb[ '8456C28C0BE7B60FB185CC76312AF7A5E188A886' ] = {
	"$": {
		"name": "Track & Field in Barcelona",
		"class": "Licensed",
		"catalog": "NES-9I-AUS",
		"publisher": "Kemco",
		"developer": "Konami",
		"region": "Australia",
		"players": "2",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-A",
				"crc": "5D99053D",
				"sha1": "8456C28C0BE7B60FB185CC76312AF7A5E188A886",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-14"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-07",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-9I-0 PRG",
								"size": "32k",
								"crc": "7413E8FF",
								"sha1": "E1CC56758F02204B6BA324F88699C2522EC4E499"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-9I-0 CHR",
								"size": "32k",
								"crc": "F521A28F",
								"sha1": "D6137CF32CD04D43B306847FFD5BE214D4395323"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						}
					],
					"cic": [
						{
							"$": {
								"type": "3197A"
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
