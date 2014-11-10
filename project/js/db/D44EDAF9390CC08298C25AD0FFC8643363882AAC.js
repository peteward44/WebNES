this.NesDb = this.NesDb || {};

NesDb[ 'D44EDAF9390CC08298C25AD0FFC8643363882AAC' ] = {
	"$": {
		"name": "Drop Zone",
		"class": "Licensed",
		"catalog": "NES-D5-NOE",
		"publisher": "Mindscape",
		"developer": "Arena Graphics",
		"portdeveloper": "Eurocom",
		"region": "Germany",
		"players": "1",
		"date": "1992"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "E402B134",
				"sha1": "D44EDAF9390CC08298C25AD0FFC8643363882AAC",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2011-06-28"
			},
			"board": [
				{
					"$": {
						"type": "NES-CNROM",
						"pcb": "NES-CNROM-08",
						"mapper": "3"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-D5-0 PRG",
								"size": "32k",
								"crc": "D21DA4F7",
								"sha1": "6EEF8B3DF065617359DC60A302E0BC9C0CC167CC"
							}
						}
					],
					"chr": [
						{
							"$": {
								"name": "PAL-D5-0 CHR",
								"size": "32k",
								"crc": "9E831A2F",
								"sha1": "E578AFA5A4025A598991977537464B7057B4B184"
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
								"type": "3195A"
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
