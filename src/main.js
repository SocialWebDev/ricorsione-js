const items = [
	{
		id: 1,
		name: "item_1",
		children: [
			{
				id: 2,
				name: "item_2",
				children: [
					{
						id: 3,
						name: "item_3",
						children: [
							{
								id: 4,
								name: "item_4",
								children: [],
							},
							{
								id: 5,
								name: "item_5",
								children: [],
							},
							{
								id: 6,
								name: "item_6",
								children: [
									{
										id: 7,
										name: "item_7",
										children: [
											{
												id: 8,
												name: "item_8",
												children: [],
											},
										],
									},
								],
							},
						]
					}
				]
			}
		]
	}
]

const printItemNameById = () => {
	let check = false
	let text = "Non è stato trovato alcun item con questo id"
	let itemId = parseInt(document.getElementById("itemId"))

	const recursiveFunction = items => {
		items.forEach(item => {
			if (!check)
			{
				if (item.id === itemId)
				{
					check = true
					text = "Il nome dell'item è: " + item.name 
				}
				else
				{
					recursiveFunction(item.children)
				}
			}
		})
	}

	recursiveFunction(items)

	document.getElementById("result").innerText = text
}


































































const printItemNameById2 = () => {
	let check = false
	let text = "Non è stato trovato alcun item con questo id."
	let itemId = parseInt(document.getElementById("itemId").value)

	const recursiveFunction = items => {
		items.forEach(item => {
			if (!check)
			{
				if (item.id === itemId)
				{
					text = "Il nome dell'item è: " + item.name
					check = true
				}
				else
				{
					recursiveFunction(item.children)
				}
			}
		})
	}

	recursiveFunction(items)

	document.getElementById("result").innerText = text
}

const printItemNameById1 = () => {
    let check = false
    let text = "Nessun item è stato trovato con questo id."
    const itemId = parseInt(document.getElementById("itemId").value)

    const recursiveFunction = items => {
        items.forEach(item => {
            if (!check)
            {
                if (item.id === itemId)
                {
                    text = "La task con id " + item.id + " si chiama: " + item.name
                    check = true
                }
                else
                {
                    recursiveFunction(item.children)
                } 
            }
        })
    }

    recursiveFunction(items)
    
    document.getElementById("result").innerText = text
}
