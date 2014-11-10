this.NesDb = this.NesDb || {};

NesDb[ 'BCD6794579A743211CF96A306EB97E74A0C33EF6' ] = {
	"$": {
		"name": "After Burner",
		"altname": "アフターバーナー",
		"class": "Licensed",
		"subclass": "3rd-Party",
		"catalog": "SUN-AFB-6200",
		"publisher": "Sunsoft",
		"developer": "Sega",
		"portdeveloper": "Sunsoft",
		"region": "Japan",
		"players": "1",
		"date": "1989-03-30"
	},
	"cartridge": [
		{
			"$": {
				"system": "Famicom",
				"crc": "F2CE3641",
				"sha1": "BCD6794579A743211CF96A306EB97E74A0C33EF6",
				"dump": "ok",
				"dumper": "bootgod",
				"datedumped": "2009-07-26"
			},
			"board": [
				{
					"$": {
						"type": "SUNSOFT-4",
						"pcb": "UNK-SUNSOFT-AFB",
						"mapper": "68"
					},
					"prg": [
						{
							"$": {
								"name": "SUNSOFT-P0",
								"size": "128k",
								"crc": "88F202F0",
								"sha1": "709E2744CF4F7CE43C41ED57EC858128E008F305"
							}
						}
					],
					"chr": [
						{
							"$": {
								"id": "0",
								"name": "SUNSOFT-00",
								"size": "128k",
								"crc": "10935D10",
								"sha1": "7A3568028D9E1088F4EFE8E2EC074B05048C4005"
							}
						},
						{
							"$": {
								"id": "1",
								"name": "SUNSOFT-01",
								"size": "128k",
								"crc": "0BC56F7A",
								"sha1": "B483839A93E4952A4C90906CAD4142ED1C8763C2"
							}
						}
					],
					"chip": [
						{
							"$": {
								"type": "Sunsoft-4"
							}
						}
					]
				}
			]
		}
	]
};
