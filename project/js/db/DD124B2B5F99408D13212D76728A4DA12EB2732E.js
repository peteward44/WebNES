this.NesDb = this.NesDb || {};

NesDb[ 'DD124B2B5F99408D13212D76728A4DA12EB2732E' ] = {
	"$": {
		"name": "Loopz",
		"class": "Licensed",
		"catalog": "NES-L8-USA",
		"publisher": "Mindscape",
		"developer": "Audiogenic Software",
		"portdeveloper": "BITS Studios",
		"region": "USA",
		"players": "2",
		"date": "1990-10"
	},
	"cartridge": [
		{
			"$": {
				"system": "NES-NTSC",
				"crc": "FD8D6C75",
				"sha1": "DD124B2B5F99408D13212D76728A4DA12EB2732E",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2006-07-03"
			},
			"board": [
				{
					"$": {
						"type": "NES-UNROM",
						"pcb": "NES-UNROM-09",
						"mapper": "2"
					},
					"prg": [
						{
							"$": {
								"name": "NES-L8-0 PRG",
								"size": "128k",
								"crc": "FD8D6C75",
								"sha1": "DD124B2B5F99408D13212D76728A4DA12EB2732E"
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
