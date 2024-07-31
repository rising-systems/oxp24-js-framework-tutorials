{
    'name': "Real Estate",
    'summary': "Manage real estate assets",
    'license': 'LGPL-3',
    'depends': ['base'],
    'data': [
        # Model data
        'data/real_estate_property_data.xml',

        # Security
        'security/ir.model.access.csv',

        # Views
        'views/actions.xml',
        'views/menus.xml',  # Depends on `actions.xml`
        'views/real_estate_property_views.xml',
    ],
    'application': True,
}
