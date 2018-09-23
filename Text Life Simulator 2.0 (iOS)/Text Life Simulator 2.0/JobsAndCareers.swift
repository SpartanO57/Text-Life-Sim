//
//  JobsAndCareers.swift
//  Text Life Simulator 2.0
//
//  Created by Enrique Perez II on 9/16/18.
//  Copyright © 2018 Violent Response Computers. All rights reserved.
//

import Foundation

var jobHeld: String = "None"

func JobHeldCheck() {
    if jobHeld == "None" {
        print(jobHeld)
    } else if jobHeld == "Doctor" {
        print(jobHeld)
        currentMoney += 100000
    }
}
