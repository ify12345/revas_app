//
//  revasApp.swift
//  revas
//
//  Created by Uchechi Nwakodo on 6/3/24.
//

import SwiftUI

@main
struct revasApp: App {
    let persistenceController = PersistenceController.shared

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(\.managedObjectContext, persistenceController.container.viewContext)
        }
    }
}
