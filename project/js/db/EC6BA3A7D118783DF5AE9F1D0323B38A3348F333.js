this.NesDb = this.NesDb || {};

NesDb[ 'EC6BA3A7D118783DF5AE9F1D0323B38A3348F333' ] = {
	"$": {
		"name": "Prince of Persia",
		"class": "Licensed",
		"catalog": "NES-PA-SCN",
		"publisher": "Mindscape",
		"developer": "Motivetime",
		"region": "Scandinavia",
		"players": "1",
		"date": "1993-04-29"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-PAL-B",
				"crc": "B7F39933",
				"sha1": "EC6BA3A7D118783DF5AE9F1D0323B38A3348F333",
				"dump": "ok",
				"dumper": "Kinopio",
				"datedumped": "2007-11-06"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-10",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "PAL-PA-0 PRG",
								"size": "128k",
								"crc": "B7F39933",
								"sha1": "EC6BA3A7D118783DF5AE9F1D0323B38A3348F333"
							}
						}
					],
					"vram": [
						{
							"$": {
								"size": "8k"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "74xx161"
							}
						},
						{
							"$": {
								"type": "74xx32"
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
