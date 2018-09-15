//
//  ViewController.swift
//  Text Life Simulator 2.0
//
//  Created by Enrique Perez II on 8/21/18.
//  Copyright © 2018 Violent Response Computers. All rights reserved.
//

import UIKit




class ViewController: UIViewController {

    @IBOutlet weak var ageLbl: UILabel!
    
    @IBOutlet weak var seasonLbl: UILabel!
    
    @IBOutlet weak var moneyLbl: UILabel!
    
    @IBOutlet weak var timeLbl: UILabel!
    
    @IBOutlet weak var ageUpBtn: UIButton!
    
    @IBOutlet weak var homeBtn: UIButton!
    
    @IBOutlet weak var settingBtn: UIButton!
    
    var currentAge = 0
    
    var currentMoney = 0
    
    func ageUp() {
        currentAge += 1
        currentMoney += 1000
        print("Age: \(currentAge)")
        print("Money: \(currentMoney)")
    }
    
    @IBAction func ageUpBtnIsPressed(_ sender: UIButton) {
        ageUp()
        ageLbl.text = "Age: \(currentAge)"
        moneyLbl.text = "Money: \(currentMoney)"
    }
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view,typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

